import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import Spinner from "../../ui/Spinner";
import { useSettings } from "./useSettings";
import { useUpdateSetting } from "./useUpdateSetting";
import { useForm } from "react-hook-form";

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestsPerBooking,
      breakfastPrice,
    } = {},
  } = useSettings();
  const { isUpdating, updateSetting } = useUpdateSetting();

  const { register, handleSubmit } = useForm();

  // function onSubmit(data) {
  //   // console.log(data);
  //   updateSetting(data);
  // }

  function handleUpdate(event, field) {
    const { value } = event.target;
    updateSetting({ [field]: value });
  }

  if (isLoading) return <Spinner />;

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          disabled={isUpdating}
          defaultValue={minBookingLength}
          {...register("minBookingLength", {
            required: "This field is required",
          })}
          onBlur={(e) => handleUpdate(e, "minBookingLength")}
        />
      </FormRow>

      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          disabled={isUpdating}
          defaultValue={maxBookingLength}
          {...register("maxBookingLength", {
            required: "This field is required",
          })}
          onBlur={(e) => handleUpdate(e, "maxBookingLength")}
        />
      </FormRow>

      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          disabled={isUpdating}
          defaultValue={maxGuestsPerBooking}
          {...register("maxGuestsPerBooking", {
            required: "This field is required",
          })}
          onBlur={(e) => handleUpdate(e, "maxGuestsPerBooking")}
        />
      </FormRow>

      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          disabled={isUpdating}
          defaultValue={breakfastPrice}
          {...register("breakfastPrice", {
            required: "This field is required",
          })}
          onBlur={(e) => handleUpdate(e, "breakfastPrice")}
        />
      </FormRow>
      {/* 
      <Button variation="primary" size="medium">
        Save
      </Button> */}
    </Form>
  );
}

export default UpdateSettingsForm;
