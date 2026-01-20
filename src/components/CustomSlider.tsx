interface CustomSliderProps {
  children: React.ReactNode[];
  currentSlide: number;
}

const CustomSlider = ({ children, currentSlide }: CustomSliderProps) => {
  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {children.map((child, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSlider;
