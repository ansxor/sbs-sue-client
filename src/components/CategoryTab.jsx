import React, { useState, useEffect } from "react";
import CategoryItem from "./CategoryItem.jsx";
import ContentItem from "./ContentItem.jsx";

let viewCache = {};

function CategoryTab(props) {
  const [categoryID, setCategoryID] = useState(props.id || 0);
  const [categoryMetadata, setCategoryMetadata] = useState({name: "", id: 0});
  const [categories, setCategories] = useState([]);
  const [contents, setContents] = useState([]);
  const [loadingContent, setLoadingContent] = useState(false);

  useEffect(() => {
    let cachedCategoryID = categoryID;
    if (viewCache[cachedCategoryID]) {
      // we need to do safety checks against every single one of these just to make sure that the program
      // doesn't try to overwrite anything when quickly switching between categories, this doesn't 100%
      // work but it's something lol
      if (cachedCategoryID === categoryID)
        if (viewCache[categoryID].category !== {})
          setCategories(viewCache[categoryID].category);
        else setCategories([]);
      if (cachedCategoryID === categoryID)
        if (viewCache[categoryID].content !== {})
          setContents(viewCache[categoryID].content);
        else setContents([]);
      if (cachedCategoryID === categoryID)
        if (viewCache[categoryID].metadata !== {})
          setCategoryMetadata(viewCache[categoryID].metadata);
        else setCategoryMetadata({});
    }
    const params = JSON.stringify({
      parentIds: [categoryID],
      sort: "name",
    });
    const url = `https://newdev.smilebasicsource.com/api/Read/chain?requests=content-${params}&content=id,parentid,name&requests=category-${params}&category=id,parentId,name&requests=category.0parentId`;
    setLoadingContent(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // if the category isn't the root id, then extract the metadata about the current category
        let metadata = { name: "[Root]", parentId: 0, id: 0 };
        if (categoryID !== 0) {
          metadata = data.category.pop();
        }
        setCategoryMetadata(metadata);
        if (data.category) setCategories(data.category);
        else setCategories([]);
        if (data.content) {
          // This is to filter out all of the garbage user pages at the root directory
          if (categoryID === 0) {
            data.content = data.content.filter((x) => x.name !== "Userpage");
          }
          setContents(data.content);
        } else setContents([]);
        setLoadingContent(false);
        viewCache[categoryID] = data;
        viewCache[categoryID].metadata = metadata;
      })
      .catch((err) => console.error(err));
  }, [categoryID]);

  useEffect(() => {
    if (props.visible === true) {
      props.changeHeader(categoryMetadata.name);
    }
  }, [props, categoryMetadata.name]);

  function switchCategory(newId) {
    setCategoryID(newId);
  }

  function switchPage(newId) {
    console.log(newId)
    props.changePage(newId)
  }

  return (
    <div
      style={{
        cursor: loadingContent ? "wait" : "default"
      }}
    >
        <div
          style={{
            display: categoryMetadata.id !== 0 ? "block" : "none",
          }}
        >
          <CategoryItem
            key={categoryID}
            name=".."
            id={categoryMetadata.parentId}
            clickEvent={switchCategory}
          />
        </div>
        {categories.map((c) => (
          <CategoryItem
            key={c.id}
            name={c.name}
            id={c.id}
            clickEvent={switchCategory}
          />
        ))}
        {contents.map((c) => (
          <ContentItem key={c.id} id={c.id} name={c.name} clickEvent={switchPage} />
        ))}
    </div>
  );
}

export default CategoryTab;
