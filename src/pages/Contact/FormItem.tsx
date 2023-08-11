import { FieldErrors } from 'react-hook-form';
import { customStyled } from 'src/assets/utils/stitches';
import { ContactFormInputs } from './types';

const FormItemContainer = customStyled('div', {
  minHeight: 64,
  marginBottom: 10,

  label: {
    display: 'flex',
    flexDirection: 'column',
    '.form-control > *': {
      width: '100%',
      borderRadius: 10,
      backgroundColor: 'rgba(128, 128, 128, 0.5)',
      outline: 'none',
    },
    '.form-control > *:focus': {
      outline: 'solid 2px var(--accent-color)',
    },

    input: {
      height: 32,
      paddingLeft: 10,
    },

    '.form-required-icon': {
      color: 'red',
    },
  },

  '.field-title-container': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'end',
  },
  '.form-error-msg': {
    marginTop: 3,
    color: 'red',
    fontSize: 12,
  },
});

type FormItemProps = {
  label: string;
  formItemName: keyof ContactFormInputs;
  errors: FieldErrors<ContactFormInputs>;
  children: JSX.Element;
  required?: boolean;
};

export function FormItem(props: FormItemProps): JSX.Element {
  const { label, formItemName, errors, children, required } = props;

  return (
    <FormItemContainer>
      <label>
        <span className="field-title-container">
          <span className="form-label-text">
            {label}
            <i className="form-required-icon" hidden={!required}>
              *
            </i>
          </span>
        </span>
        <div className="form-control">{children}</div>
        {errors[formItemName] && (
          <span className="form-error-msg">
            {errors[formItemName]?.message}
          </span>
        )}
      </label>
    </FormItemContainer>
  );
}
