export default function Profile() {
  return (
    <div class="flex justify-center items-center mt-20">
      <div className="rounded-3xl flex flex-1 flex-col p-[2rem] gap-[0.5rem] max-w-2xl shadow-2xl">
        <div className="flex mt-4 justify-center">
          <span className="text-3xl font-bold mb-8 mt-2 text-white">
            Profile Page
          </span>
        </div>
        <img
          className="w-32 h-32 rounded-full mx-auto object-cover"
          src="/download.jpeg"
          alt=""
        />
        <div className="text-sm mt-5 text-gray">
          <a
            href="#"
            className="font-medium leading-none text-white hover:text-indigo-600 transition duration-500 ease-in-out"
          >
            Jane Doe
          </a>
          <p>Blogger &amp; Youtuber</p>
        </div>
        <p className="mt-2 text-sm text-white">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available. Wikipedia
        </p>
        <div className="flex my-4 justify-center">
          <a href={"/edit"} className="p-3 bg-[#3abff8] rounded-lg font-bold">
            Edit Profile
          </a>
        </div>
      </div>
    </div>
  );
}
