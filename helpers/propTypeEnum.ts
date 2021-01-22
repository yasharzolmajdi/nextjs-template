import PropTypes from "prop-types";

export default function propTypeEnum<T>(enumType: T): PropTypes.Requireable<keyof T> {
  type valuesFromEnum = keyof typeof enumType;

  const values = Object.keys(enumType) as valuesFromEnum[];

  return PropTypes.oneOf<keyof T>(values);
}
