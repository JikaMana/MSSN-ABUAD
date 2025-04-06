const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600">Page Not Found</p>
        <p className="text-gray-500 mt-2">
          The blog post you're looking for doesn't exist.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
