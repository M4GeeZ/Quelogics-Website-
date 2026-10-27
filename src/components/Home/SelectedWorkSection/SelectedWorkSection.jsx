import "./SelectedWorkSection.css";

const marqueeCopies = [0, 1, 2, 3];

const SelectedWorkSection = () => {
  return (
    <section className="selected-work-marquee-section">
      <div className="selected-work-marquee-window" aria-label="Selected work">
        <div className="selected-work-marquee-track">
          {marqueeCopies.map((copyIndex) => (
            <span
              className="selected-work-marquee-copy"
              aria-hidden={copyIndex > 0 ? "true" : undefined}
              key={copyIndex}
            >
              Work that closes gaps <b>—</b>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWorkSection;
