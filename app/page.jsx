import UploadBox from "../components/UploadBox";

export default function Page() {
  return (
    <div className="max-w-2xl mx-auto pt-20 px-4">
      <h1 className="text-3xl font-bold text-center mb-4">PoliceBook</h1>
      <p className="text-center text-gray-600 mb-8">
        Generate foto polisi dengan scene baru menggunakan AI
      </p>
      <UploadBox />
    </div>
  );
}
