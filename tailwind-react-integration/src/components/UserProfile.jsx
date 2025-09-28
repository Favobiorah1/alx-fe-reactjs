function UserProfile() {
  return (
    <div
      className="
        bg-gray-100 
        p-4 sm:p-4 md:p-8            /* ✅ Smaller padding on small screens */
        max-w-xs sm:max-w-xs md:max-w-sm /* ✅ Adjust max width by screen size */
        mx-auto my-10 sm:my-10 md:my-20  /* ✅ Center & give vertical margin */
        rounded-lg shadow-lg
        text-center
      "
    >
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="
          rounded-full mx-auto
          w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 /* ✅ Responsive image size */
        "
      />
      <h1
        className="
          my-4
          text-lg sm:text-lg md:text-xl /* ✅ Responsive heading size */
          text-blue-800
          font-semibold
        "
      >
        John Doe
      </h1>
      <p
        className="
          text-gray-600
          text-sm sm:text-sm md:text-base /* ✅ Responsive paragraph text */
        "
      >
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
