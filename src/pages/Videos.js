import React from "react";
import { withNamespaces } from "react-i18next";
import styles from "./Videos.module.css";
import { useState, useEffect } from "react";

const Videos = (props) => {
  const { t } = props;
  const [urlList, setUrlList] = useState([]);

  const getVideos = async () => {
    try {
      const response = await fetch(
        "https://api.dailymotion.com/videos?fields=embed_url&user=NoLanguageBarriers"
      );
      const data = await response.json();
      setUrlList(data.list);
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);
  return (
    <div className={styles.container}>
      <h1 className="heading">{t("VideosHeader")}</h1>
      <div className={styles.videosContainer}>
        {urlList.map((elem) => {
          return (
            <iframe
              style={urlList.length === 1 ? { gridColumnStart: "2" } : {}}
              loading="lazy"
              title={elem.embed_url}
              allowFullScreen={true}
              className={styles.video}
              key={elem.embed_url}
              src={elem.embed_url}
            ></iframe>
          );
        })}
      </div>
    </div>
  );
};

export default withNamespaces()(Videos);
