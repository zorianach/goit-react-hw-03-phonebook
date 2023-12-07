import {FormFilter, LabelFilter, InputFilter} from './Filter.styled';
// import { Input } from '../Forms/AddContactForm.styled';

const Filter = ({ value, onChange }) => {
  return (
    <FormFilter>
      <LabelFilter> Find contacts by name
      </LabelFilter>
      <InputFilter
          type="name"
          value={value}
          onChange={onChange}
          placeholder="Please enter a name to search"
        />
    </FormFilter>
  );
};

export default Filter;