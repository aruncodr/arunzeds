import PasteButton from "@/components/PasteButton";

export default function Home() {
  return (
    <div>
      <h1 className="pb-4" style={{ textAlign: "center", marginTop: "20px" }}>
        Next.js Paste Button Example
      </h1>
      <PasteButton />
    </div>
  );
}
