const getStoredReadList2 = () => {
  const storedListString2 = localStorage.getItem("read-list2");
  if (storedListString2) {
    const storedList2 = JSON.parse(storedListString2);
    return storedList2;
  } else {
    return [];
  }
};

const addToStoredReadList2 = (id2) => {
  const storedList2 = getStoredReadList2();
  if (storedList2.includes(id2)) {
    console.log(id2, "already exists in the read list 2.");
  } else {
    storedList2.push(id2);
    const storedListString2 = JSON.stringify(storedList2);
    localStorage.setItem("read-list", storedListString2);
  }
};

export { addToStoredReadList2 };
