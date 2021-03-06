import { Fragment } from "react";
import Head from "next/head";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>React with Nextjs</title>
        <meta 
          name="description"
          content="Tour guide"
        />
      </Head>

      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

// export async const getStaticProps=()=>{}
export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://arunachalam:arun0606@cluster0.ja4vd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("myFirstNextDatabase");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
