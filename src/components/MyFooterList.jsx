const MyFooterList = ({ content }) => {
  return (
    <li className="nav-item">
      <a className="nav-link text-muted" href="#home">
        {content}
      </a>
    </li>
  );
};

export default MyFooterList;
