

const Container = ({ children }) => {
    return (
       <div className="min-h-screen bg-linear-to-b from-[#1a2a2f] via-[#0b1215] to-black text-slate-200">
  {children}
</div>
    );
};

export default Container;