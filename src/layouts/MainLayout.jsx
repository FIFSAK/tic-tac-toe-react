function MainLayout(props) {
  return (
    <div>
      <div className="grid w-screen h-screen bg-white dark:bg-black text-black dark:text-white text-lg">
        {props.children}
      </div>
    </div>
  );
}

export default MainLayout;