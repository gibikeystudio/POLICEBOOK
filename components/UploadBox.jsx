"use client";
import { useState } from "react";

export default function UploadBox() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);

    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch("/generate", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setResult(data?.output);
    setLoading(false);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4"
      />

      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate"}
      </button>

      {result && (
        <img src={result} className="mt-4 rounded" />
      )}
    </div>
  );
}
