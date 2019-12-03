import React, { useState, useEffect } from "react";
import StudentSearchBar from "../../components/StudentSearchBar";
import StudentsTable from "../../components/StudentsTable";
import Pager from "../../components/common/Pager";
import qs from "query-string";
import { searchStudents } from "../../services/student";

function getQuery(search) {
  const queryDefault = {
    key: "",
    sex: -1,
    page: 1,
    limit: 10
  };
  let query = qs.parse(search);
  query = Object.assign({}, queryDefault, query);
  // 由于从路由解析而来的值均为字符类型，应该进行转换
  query.limit = +query.limit;
  query.page = +query.page;
  query.sex = +query.sex;
  return query;
}

function useResp(query) {
  const [resp, setResp] = useState({
    count: 0,
    datas: []
  });

  useEffect(() => {
    searchStudents({
      key: query.key,
      limit: query.limit,
      sex: query.sex,
      page: query.page
    }).then(r => {
      setResp(r);
    });
  }, [query.key, query.limit, query.sex, query.page]);
  return resp;
}

function changeLocation(query, history) {
  let queryStr = qs.stringify(query);
  history.push("?" + queryStr);
}

export default function StudentList(props) {
  const query = getQuery(props.location.search);
  const resp = useResp(query);

  return (
    <div>
      <StudentSearchBar
        onSearch={con => {
          const newQuery = {
            ...query,
            ...con,
            page: 1
          };
          changeLocation(newQuery, props.history);
        }}
      />
      <StudentsTable students={resp.datas} />
      <Pager
        current={query.page}
        total={resp.cont}
        pageSize={query.limit}
        panelNumber={5}
        onPageChange={cur => {
          const newQuery = {
            ...query,
            page: cur
          };
          changeLocation(newQuery, props.history);
        }}
      />
    </div>
  );
}
