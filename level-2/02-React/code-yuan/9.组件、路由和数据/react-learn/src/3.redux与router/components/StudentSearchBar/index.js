import React, { useState } from "react";
import "./index.css";


export default function StudentSearchBar({ def, onSearch }) {
  const [key, setKey] = useState( "");
  const [sex, setSex] = useState(-1);

  return (
    <div>
      关键字：
      <input
        type="text"
        placeholder="邮箱/学号/地址"
        value={key}
        onChange={e => {
          setKey(e.target.value);
        }}
      />
      性别：
      <label>
        <input
          type="radio"
          name="sex"
          checked={sex === 0}
          onChange={() => {
            setSex(0);
          }}
        />
        男
      </label>
      <label>
        <input
          type="radio"
          name="sex"
          checked={sex === 1}
          onChange={() => {
            setSex(1);
          }}
        />
        女
      </label>
      <label>
        <input
          type="radio"
          name="sex"
          checked={sex === -1}
          onChange={() => {
            setSex(-1);
          }}
        />
        不限
      </label>
      <button
        onClick={() => {
          onSearch &&
            onSearch({
              key,
              sex
            });
        }}
      >
        查询
      </button>
    </div>
  );
}
