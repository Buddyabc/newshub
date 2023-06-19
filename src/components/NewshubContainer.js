import React, { useState, useEffect } from "react";
import Newshubitems from "./Newshubitems";
import Loader from "./Loader";
import PropTypes from "prop-types";
import NewsHublogoC from "./images/NewsHublogoC.jpg";
import InfiniteScroll from "react-infinite-scroll-component";

const NewshubContainer = (props) => {
  const firstCapital = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalresults] = useState(0);
  document.title = `${firstCapital(props.category)}-NewsHub`;

  const fetchmoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page+1}`;
    setPage(page + 1);
    setLoading(true);
    let data = await fetch(url);
    let dataParsed = await data.json();
    setArticles(articles.concat(dataParsed.articles));
    setTotalresults(dataParsed.totalResults);
    setLoading(false);
  };
  const updatefxn = async () => {
    props.alterProgress(10);
    let api = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`;
    setLoading(true);
    let data = await fetch(api);
    props.alterProgress(30);
    let dataParsed = await data.json();
    props.alterProgress(70);
    console.log(dataParsed);
    setArticles(dataParsed.articles);
    setTotalresults(dataParsed.totalResults);
    setLoading(false);
    props.alterProgress(100);
    };
  useEffect(() => {
    updatefxn();
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop:"6vh"
        }}
      >
        <img
          className="my-4"
          src={NewsHublogoC}
          style={{ height: "10vh" }}
          alt=""
        />
        <h1 className={` text-${
              props.modeText === "light" ? "Dark" : "light"
            }`}>- Top {firstCapital(props.category)} Headlines</h1>
      </div>
      {loading && <Loader modeText={props.modeText}></Loader>}
      <InfiniteScroll
        dataLength={articles.length} //This is important field to render the next data
        next={fetchmoreData}
        hasMore={articles.length != totalResults}
        loader={<Loader modeText={props.modeText}></Loader>}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4 my-2" key={element.url}>
                  <Newshubitems modeText={props.modeText}
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageurl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://tse4.mm.bing.net/th?id=OIP.O21Q6ByDjlqd7OoD0LWpCwHaE8&pid=Api&P=0"
                    }
                    urlofNews={element.url}
                    authorofnews={element.author ? element.author : "Unknown"}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};
NewshubContainer.defaultProps = {
  country: "in",
  pageSize: 5,
  category: "general",
};
NewshubContainer.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default NewshubContainer;
