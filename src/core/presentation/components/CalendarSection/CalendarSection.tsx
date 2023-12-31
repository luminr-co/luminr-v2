import { CalendarComponent } from "./Calendly";

export default function CalendarSection() {
  return (
    <section className="mb-24 lg:mb-40">
      <h1
        className="Calendar lg:text-5xl text-2xl font-extrabold font-primary text-beige text-center mb-16 lg:pt-64 pt-24 "
        id="call"
      >
        Hop on
        <span className="text-orange"> free call </span>
        today
      </h1>
      <div className="mx-auto ml-3">
        <CalendarComponent />
      </div>
    </section>
  );
}
