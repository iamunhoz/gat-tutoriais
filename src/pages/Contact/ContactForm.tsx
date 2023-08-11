/* eslint-disable no-console */
import { useForm, SubmitHandler } from 'react-hook-form';
import { customStyled } from 'src/assets/utils/stitches';
import useCopy from 'src/state/copy';
import { patterns } from 'src/assets/utils/regex-patterns';
import ReactInputMask from 'react-input-mask';
import { FormItem } from './FormItem';
import { ContactFormInputs } from './types';

const StyledContactForm = customStyled('form', {
  'input[type="submit"]': {
    border: '2px solid gray',
    borderRadius: 5,
    padding: 5,
    marginTop: 10,

    '&:hover': {
      border: '2px solid var(--accent-color)',
      cursor: 'pointer',
    },
  },
});

export function ContactForm(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormInputs>();
  const {
    contactFirstName,
    contactLastName,
    contactEmail,
    contactMessage,
    contactTelephone,
    contactSendButtonLabel,
  } = useCopy();

  const onSubmit: SubmitHandler<ContactFormInputs> = (data) => {
    console.log(data);
    // enviar para o novo servidor
  };

  return (
    <StyledContactForm
      onSubmit={handleSubmit(onSubmit)}
      onErrorCapture={() => {
        console.log('errors', errors);
      }}
    >
      <FormItem
        label={contactFirstName.label}
        formItemName="firstName"
        errors={errors}
        required
      >
        <input
          {...register('firstName', {
            required: contactFirstName.message?.required,
          })}
        />
      </FormItem>

      <FormItem
        label={contactLastName.label}
        formItemName="lastName"
        errors={errors}
      >
        <input {...register('lastName', { required: true })} />
      </FormItem>

      <FormItem
        label={contactEmail.label}
        formItemName="email"
        errors={errors}
        required
      >
        <input
          {...register('email', {
            required: contactEmail.message?.required,
            pattern: {
              value: patterns.email,
              message: contactEmail.message?.mismatch as string,
            },
          })}
        />
      </FormItem>
      <FormItem
        label={contactTelephone.label}
        formItemName="telephone"
        errors={errors}
      >
        <ReactInputMask
          mask="(99)99999-9999"
          alwaysShowMask={false}
          maskPlaceholder=""
          type="text"
          {...register('telephone')}
        />
      </FormItem>

      <FormItem
        label={contactMessage.label}
        formItemName="message"
        errors={errors}
        required
      >
        <textarea
          {...register('message', {
            required: contactMessage.message?.required,
          })}
          rows={4}
        />
      </FormItem>

      <input type="submit" value={contactSendButtonLabel} />
    </StyledContactForm>
  );
}
