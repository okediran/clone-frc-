export default function ContentCard({ title, children }) {
    return (
      <div className="mb-6">
        <h3 className="font-bold text-lg">{title}</h3>
        <div className="text-gray-700">{children}</div>
      </div>
    );
  }
  