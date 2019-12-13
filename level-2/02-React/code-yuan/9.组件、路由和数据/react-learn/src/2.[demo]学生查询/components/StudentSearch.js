import React, { PureComponent } from "react";
import StudentSearchBar from "./StudentSearchBar";
import StudentsTable from "./StudentsTable";
import Pager from "./common/Pager";
import { connect } from "react-redux";
import { change } from "../store/action/students/searchCondition";
import { fetchStudents } from "../store/action/students/searchStudents";
import store from "../store";

// 连接StudentsTable
let mapStateToProps = state => ({
  students: state.students.result.datas
});

const StudentsTableContainer = connect(mapStateToProps)(StudentsTable);

// 连接StudentSearchBar
mapStateToProps = state => ({
  def: state.students.condition
});

let mapDispatchToProps = dispatch => ({
  onSearch: newCondition => {
    newCondition.page = 1; // 条件中页码回归到1
    dispatch(change(newCondition));
    dispatch(fetchStudents());
  }
});

const StudentSearchBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentSearchBar);

// 连接分页组件
mapStateToProps = state => ({
  current: state.students.condition.page,
  pageSize: state.students.condition.limit,
  total: state.students.result.total,
  panelNumber: 5
});

mapDispatchToProps = dispatch => ({
  onPageChange: newPage => {
    dispatch(change({ page: newPage }));
    dispatch(fetchStudents());
  }
});

const PagerContainer = connect(mapStateToProps, mapDispatchToProps)(Pager);

// export default function StudentSearch() {
//   return (
//     <div>
//       <StudentSearchBarContainer />
//       <StudentsTableContainer />
//       <PagerContainer />
//     </div>
//   );
// }

export default class StudentSearch extends PureComponent {
  componentDidMount() {
    store.dispatch(fetchStudents());
  }

  render() {
    return (
      <div>
        <StudentSearchBarContainer />
        <StudentsTableContainer />
        <PagerContainer />
      </div>
    );
  }
}
