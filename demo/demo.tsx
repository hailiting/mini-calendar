import { memo, useCallback, useState } from "react";
import "./demo.css";
import { Value } from "../src/Calendar/common/types";
import DateTimePicker from "../src/DateTimePicker";
import { formatTime } from "../src/Calendar/common/date-formatter";
interface Prop {
  locale?: string;
}
const DateTimePickerDemo = memo(({ locale }: Prop) => {
  const [formatedValue, setFormatedValue] = useState<string>();
  const handleChange = useCallback((value: Value) => {
    if (!value) {
      return;
    }
    if (value instanceof Array) {
      setFormatedValue(
        `${formatTime(value[0], locale)} -> ${formatTime(value[1], locale)}`
      );
      return;
    }
    setFormatedValue(formatTime(value, locale));
  }, []);

  return (
    <>
      <DateTimePicker
        onChange={handleChange}
        locale={locale}
        selectRangeEnable
      />
      <p style={{ height: "40px" }}>{"当前选择的⽇期是: " + formatedValue}</p>
    </>
  );
});
export function Demo() {
  return (
    <div className="demo">
      <label className="label">日历</label>
      <DateTimePickerDemo locale="zh-CN" />
    </div>
  );
}

export default Demo;
