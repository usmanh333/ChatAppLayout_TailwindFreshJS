import Orders from "../../islands/Orders.tsx";

export default function index() {
  return (
    <div class={"px-12"}>
      <h2 className="text-3xl text-white font-bold leading-7 m-7 mt-8">
        Order History
      </h2>
      <Orders />
    </div>
  );
}
