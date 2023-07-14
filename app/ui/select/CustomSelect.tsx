import { FC } from 'react'
import Select, { Options, OnChangeValue } from 'react-select'

export interface IOption {
  label: string
  value: string
}

export interface ICustomSelect {
  options: Options<IOption>
  placeholder?: string
  onChange?: (newValue: OnChangeValue<IOption, false>) => void
  isClearable?: boolean
  defaultValue?: IOption
}

const CustomSelect: FC<ICustomSelect> = (props) => {
  return (
    <Select
      classNamePrefix="custom-select"
      closeMenuOnScroll
      isSearchable={false}
      defaultValue={props.defaultValue}
      {...props}
    />
  )
}

export default CustomSelect
