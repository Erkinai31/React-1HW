function Content(props) {
  let { title, url } = props;

  return (
    <div>
      <h2>{title}</h2>
      <img src={url} style={{ width: 300, heigh: 300 }} />
    </div>
  );
}

export default Content;
