import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Container} from 'react-bootstrap'
import { VerifyAccountService } from '../../../services/authentication/authentication'
import WebsiteLayout from '../../Layouts/Website.layout'
import { FcAlarmClock, FcApproval } from "react-icons/fc";

const VerifyAccount = () => {

  const { id } = useParams()
  const [loading, setLoading] = useState()

  useEffect(async () => {
    setLoading(await !VerifyAccountService(id))
  }, [id])

  return (
    <WebsiteLayout>
      <Container>
        <div className="d-flex justify-content-center">
          <Container className="my-5 py-5">
            <div className="d-flex justify-content-center">
              {loading ? (
                <div className="text-center">
                  <FcAlarmClock style={{fontSize: '5rem'}} />
                  <h4 className="mt-2">Verify your account ...</h4>
                  <span>Please wait!</span>
                </div>
              ) : (
                <div className="text-center">
                  <FcApproval style={{fontSize: '5rem'}} />
                  <h4 className="mt-2">Your account is now verified</h4>
                </div>
              )}
            </div>
          </Container>
        </div>
      </Container>
    </WebsiteLayout>
  )

}

export default VerifyAccount
