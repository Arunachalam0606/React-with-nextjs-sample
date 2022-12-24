import { useRouter } from "next/router";
import { Fragment } from "react";
import Head  from "next/head";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetUpPage() {
  const router = useRouter();
  async function addMeetupHandler(enteredMeetupData) {
    // console.log(enteredMeetupData);
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "content-Type": "application/json",
      },
    });

    const data = await response.json();
    router.push("/");
  }
  return (
    <Fragment>
      <Head>
        <title>React with Nextjs</title>
        <meta name="description" content="Add your own image and details" />
      </Head>

      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}

export default NewMeetUpPage;
