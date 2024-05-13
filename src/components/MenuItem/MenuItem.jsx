const MenuItem = ({ title, link }) => {
  return (
    <li>
      <a href={link}>{title}</a>
    </li>
  );
};

export default MenuItem;
