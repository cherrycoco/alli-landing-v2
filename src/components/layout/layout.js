import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "../footer/footer"
import Header from "../header/header"
import useQuiz from "../../context/useQuiz"
import { initialQuizContext } from "../../context/initialState"
import utmParser from "../../util/helpers"

const Layout = ({ children, footer, location }) => {
  const { quiz, setQuiz } = useQuiz() || initialQuizContext;

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  useEffect(() => {
    if (quiz && !quiz.referrer) {
      console.log('location', location)
      const newQuiz = { ...quiz };
      if (document && document.referrer) {
        newQuiz.referrer = document.referrer;
        setQuiz(newQuiz);
      }

      if (location && location.search) {
        console.log(location.search);
        const utm = utmParser(location.search.slice(1));
        console.log('utm', utm);
        const source = utm['utm_source'];
        const medium = utm['utm_medium'];

        if (medium === 'ad') {
          newQuiz.isPaidReferrer = true;
        }

        if (!newQuiz.referrer) {
          newQuiz.referrer = source;
        }

        setQuiz(newQuiz);
      }
    }
  }, [])

  console.log(quiz);

  return (
    <div>
      <Header />
      <main>{children}</main>
      {footer && <Footer />}
    </div>
  )
}

export default Layout
