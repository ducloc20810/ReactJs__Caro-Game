import React from "react";

export default function Square({ clickHandle }) {
  return (
    <>
      <div
        id="1"
        className="chess-board__square"
        onClick={(event) => {
          clickHandle(event);
        }}
      ></div>

      <div
        id="2"
        className="chess-board__square"
        onClick={(event) => {
          clickHandle(event);
        }}
      ></div>

      <div
        id="3"
        className="chess-board__square"
        onClick={(event) => {
          clickHandle(event);
        }}
      ></div>
      <div
        id="4"
        className="chess-board__square"
        onClick={(event) => {
          clickHandle(event);
        }}
      ></div>
      <div
        id="5"
        className="chess-board__square"
        onClick={(event) => {
          clickHandle(event);
        }}
      ></div>
      <div
        id="6"
        className="chess-board__square"
        onClick={(event) => {
          clickHandle(event);
        }}
      ></div>
      <div
        id="7"
        className="chess-board__square"
        onClick={(event) => {
          clickHandle(event);
        }}
      ></div>
      <div
        id="8"
        className="chess-board__square"
        onClick={(event) => {
          clickHandle(event);
        }}
      ></div>
      <div
        id="9"
        className="chess-board__square"
        onClick={(event) => {
          clickHandle(event);
        }}
      ></div>
    </>
  );
}
