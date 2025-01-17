const Tickets = () => {
  return (
    <section>
      <h2 className="mt-20">Tickets</h2>
      <table className="mt-5 table w-full border-collapse border border-zinc-500">
        <thead className="text-lg font-bold">
          <tr>
            <th className="border border-zinc-500 p-3">Tickets</th>
            <th className="border border-zinc-500 p-3">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-zinc-500 px-3 py-2">Single day ticket</td>
            <td className="border border-zinc-500 px-3 py-2">£30</td>
          </tr>
          <tr>
            <td className="border border-zinc-500 px-3 py-2">7 day ticket</td>
            <td className="border border-zinc-500 px-3 py-2">£100</td>
          </tr>
        </tbody>

        <caption className="caption-bottom">
          <p className="mt-5">
            Tickets are available to purchase from the ticket office on the day of
            the event.
          </p>
        </caption>
      </table>
    </section>
  );
};

export default Tickets;
