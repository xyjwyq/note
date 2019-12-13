import React from "react";
import "./index.css";

export default function StudentsTable(props) {
  const trs = props.students.map(stu => (
    <tr key={stu.id}>
      <td>{stu.sNo}</td>
      <td>{stu.name}</td>
      <td>{stu.sex === 1 ? "女" : "男"}</td>
      <td>{stu.address}</td>
      <td>{stu.email}</td>
      <td>
        <a href={`/students/${stu.sNo}`}>详情</a>
      </td>
    </tr>
  ));
  return (
    <table className="tab">
      <thead>
        <tr>
          <th>学号</th>
          <th>姓名</th>
          <th>性别</th>
          <th>地址</th>
          <th>邮箱</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>{trs}</tbody>
    </table>
  );
}
