import Button from "components/buttons/Button";
import FormError from "components/form/FormError";
import TextInput from "components/form/TextInput";
import CenterLayout from "components/layouts/CenterLayout";
import { Form, Formik } from "formik";
import { ClientSafeProvider, signIn } from "next-auth/client";
import { useStore } from "stores/store";
import React, { useState } from "react";
import * as Yup from "yup";
import OrderSucess from "features/payment/summary/OrderSucess";

interface RegisterPageProps {
  providers: Record<string, ClientSafeProvider>;
}

const detailsForm: React.FC<RegisterPageProps> = ({ providers }) => {
  const { setAppLoading } = useStore().commonStore;
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const { cart } = useStore().cartStore;

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    address: Yup.string().required("Address is required"),
    phone: Yup.string().required("Phone is required"),
  });
  const handleSubmitStatus = () => {
    setAppLoading(true);
    setTimeout(() => {
      setIsLogged(true);
      setAppLoading(false);
    }, 2000);
  };
  return (
    <>
      {!isLogged ? (
        <CenterLayout>
          <h4 className="text-2xl mb-8 font-semibold">Add Shipment Details</h4>
          <Formik
            validationSchema={validationSchema}
            initialValues={{ name: "", address: "", phone: "", error: null }}
            onSubmit={async (values, { setErrors }) => {
              const { name, address, phone } = values;

              setAppLoading(true);

              signIn("credentials", {
                name,
                address,
                phone,
                redirect: false,
              }).then((res) => {
                setErrors({ error: res?.error });
              });

              setAppLoading(false);
            }}
          >
            {({ errors }) => (
              <Form
                onSubmit={() => {
                  handleSubmitStatus();
                }}
                autoComplete="off"
              >
                <FormError error={errors.error} />
                <TextInput name="name" label="Name" type="text" />
                <TextInput name="address" label="Address" type="text" />
                <TextInput name="phone" label="Phone" type="text" />

                <Button
                  className="w-full uppercase !transform-none mt-4"
                  type="submit"
                  variant="primary"
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </CenterLayout>
      ) : (
        <OrderSucess />
      )}
    </>
  );
};

export default detailsForm;
