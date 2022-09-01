const Footer = () => {
  return (
    <footer
      className="text-gray-500 absolute 
        bottom-0 left-[50%] translate-x-[-50%] 
        whitespace-nowrap p-6"
    >
      Copyright &copy;{new Date().getFullYear()} Jin Zhang
    </footer>
  );
};
export default Footer;
