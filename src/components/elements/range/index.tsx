import { Range } from 'react-range';
import { RenderThumb, RenderTrack } from './styles';

interface RangeSliderProps {
  step: number;
  min: number;
  max: number;
  values: number[];
  onChange?: (values: number[]) => void;
}

export const RangeSlider = ({
  onChange,
  values,
  step,
  min,
  max,
}: RangeSliderProps) => {
  return (
    <Range
      step={step}
      min={min}
      max={max}
      renderTrack={({ props, children }) => (
        <RenderTrack data-testid="track" {...props} style={{ ...props.style }}>
          {children}
        </RenderTrack>
      )}
      renderThumb={({ props }) => (
        <RenderThumb
          data-testid="thumb"
          {...props}
          style={{ ...props.style }}
        />
      )}
      values={values}
      onChange={onChange}
    />
  );
};
