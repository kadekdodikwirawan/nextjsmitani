import { AppWrapper } from '../context/global'
function Application({ Component, pageProps }: any) {
  return (
       <AppWrapper>
          <Component {...pageProps} />
        </AppWrapper>
      )
    
  }
  
  export default Application