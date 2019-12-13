import React from "react";
import PropTypes from "prop-types";

const SimpleTable = ({ className, data, tableTitle, direction }) => (
  <div className={"SimpleTable" + (className ? " " + className : "")}>
    <div className="table-wrapper">
      <div className="table-title">{tableTitle}</div>
      {direction === "horizontal" ? (
        <table>
          <tbody>
            {Object.keys(data).map(key => {
              return (
                <tr className="horizontal-row" key={data[key]}>
                  <th>{key}</th>
                  <td>{data[key]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <table>
          <thead>
            <tr>
              {Object.keys(data).map(key => {
                return <th key={key}>{key}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              {Object.keys(data).map(key => {
                return (
                  <td key={data[key]}>
                    {typeof data[key] === "object"
                      ? data[key].map(deepKey => {
                          return (
                            <span key={deepKey + "nested"}>{deepKey}</span>
                          );
                        })
                      : data[key]}
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      )}
    </div>
    <style jsx>{`
      .SimpleTable {
        * {
          text-align: left;
        }
      }

      .table-title {
        background: #e6e9f4;
        font-size: 18px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1;
        letter-spacing: normal;
        color: #052892;
        padding: 10px 20px;
      }

      .table-wrapper {
        display: flex;
        flex-direction: column;

        table {
          border-collapse: collapse;
        }

        th,
        td {
          border: solid 1px #eeeeee;
          padding: 20px;
        }

        th {
          width: 194px;
          background-color: #f9f9f9;
          font-size: 18px;
          font-weight: 300;
          font-style: normal;
          font-stretch: normal;
          line-height: 1;
          letter-spacing: normal;
          color: #1e2837;
        }

        td {
          font-size: 16px;
          font-weight: 300;
          font-style: normal;
          font-stretch: normal;
          line-height: 1.38;
          letter-spacing: normal;
          color: #1e2837;
          vertical-align: top;
        }
      }
    `}</style>
  </div>
);

SimpleTable.propTypes = {
  /**
   * Data Obj
   */
  data: PropTypes.object.isRequired,
  /**
   * SimpleTable Title
   */
  tableTitle: PropTypes.string.isRequired,
  /**
   * Direction
   */
  direction: PropTypes.string
};

export default SimpleTable;
