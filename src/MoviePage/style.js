import { css } from "@emotion/core";

const movieContainer = css`
  margin-top: 30px;
  margin-bottom: 30px;
  width: 1000px;
`;

const resultContainer = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const itemCard = css`
  align-items: center;
  background-color: #fff;
  box-sizing: border-box;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  margin-top: 16px;
  width: 483px;
`;

const movieImage = css`
  height: 278px;
  width: 185px;
`;

const movieInfo = css`
  box-sizing: border-box;
  height: 278px;
  overflow-y: auto;
  position: relative;
  padding: 10px 16px 16px 16px;
  width: 298px;
`;

const movieTitle = css`
  align-items: center;
  display: flex;
  flex-wrap: wrap;

  h3 {
    display: block;
    font-weight: 600;
    font-size: 1.1em;
    line-height: 1.1em;
    margin-bottom: 9px;
    width: 100%;
  }

  span {
    color: rgba(0, 0, 0, 0.6);
    line-height: 1em;
  }
`;

const movieOverview = css`
  color: #4d4d4d;
  font-size: 0.9em;
  line-height: 1.2em;
  margin-top: 30px;
  word-wrap: break-word;
  white-space: normal;
`;

export {
  movieContainer,
  itemCard,
  resultContainer,
  movieImage,
  movieInfo,
  movieTitle,
  movieOverview
};
