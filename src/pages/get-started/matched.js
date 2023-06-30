import React, { useEffect } from "react";
import Consult from "../../components/consult/consult";
import LayoutQuiz from "../../components/layout/layoutQuiz";
import useQuiz from "../../context/useQuiz";
import { useQuery } from "@apollo/client";
import GET_REQUEST from "../../graphql/query/request";
import Loading from "../../components/loading/loading";
import TherapistCardDrawer from "../../components/card/therapistCardDrawer";

const Matched = ({ location }) => {
  const { quiz, setQuiz } = useQuiz() || {};
  const requestId = location.search && location.search.slice(1);
  const { data, loading, error } = useQuery(GET_REQUEST, { 
    variables: { id: requestId },
    fetchPolicy: 'network-only'
  });
  const { pros, user, rate, tier } = quiz;

  useEffect(() => {
    if (data && data.request) { 
      console.log('req', data.request);
      const { id, matches, user, stage } = data.request;
      const pros = matches ? matches.split('|') : [];
      
      setQuiz({
        ...quiz,
        requestId: id,
        user: {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          tel: user.tel,
        },
        rate: user.rate.rate,
        pros,
        tier: stage,
      });
    }
  }, [data]);

  const infoData = {
    title: `${user.firstName}, here are your matched ${tier} therapists.`,
    description: `Your selected session rate is $${rate} - you can change your session rate anytime you need. Choose a therapist who resonates with you the most to schedule your first session:`,
  };
  
  const noMatches = {
    title: `Hi ${user.firstName}, we're still on the hunt for your perfect match!`,
    description: `Currently, we haven't found a perfect match for you within our ${tier} therapists. No worries, though! We would love to invite you for a free consultation call. This gives us a chance to understand you better and find a therapist who fits just right.`,    
  }

  console.log(quiz);
  // if (loading) return <Loading />;

  return (
    <LayoutQuiz data={pros.length > 0 ? infoData : noMatches}>
      {loading && <Loading />}
      <div className='flex mt-8 flex-wrap gap-8 justify-center'>
        {pros.length > 0 && pros.map(id => <TherapistCardDrawer id={id}/>)}
      </div>
      <div className='w-4/5 m-auto pb-48'>
        <Consult quiz={quiz} setQuiz={setQuiz} />
      </div>
    </LayoutQuiz>
  );
}

export default Matched;