type Props = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
};

const NotesLayout = ({ children, sidebar }: Props) => {
  return (
    <section style={{ display: "flex", gap: "20px" }}>
      <aside
        style={{ display: "flex", alignItems: "center", fontSize: "16px" }}
      >
        {sidebar}
      </aside>
      <div>{children}</div>
    </section>
  );
};

export default NotesLayout;
