



export const Lenguabuton = () => {


  return (
    <div class="w-[70%] h-[60px] mt-15 border-[5px] border-green-700 m-auto flex justify-around">
      <img
        src="/idioma.svg"
        alt=" logo de idiomas"
        className="w-[40%] h-[100%] items-center "
      />
      <select class="w-[60%] col-start-1 row-start-1 appearance-none bg-gray-100  text-center cursor-pointer">
        <option>Español</option>
        <option>Ingles</option>
        <option>Frances</option>
      </select>
    </div>
  );
};
