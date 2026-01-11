

const Container = ({ children }) => {
    return (
       <div className="md:min-h-screen bg-linear-to-b from-black to-black text-slate-200">
  {children}
</div>
    );
};

export default Container;