import { Button, ButtonTypes } from "@/components/Button";
import { DescisionScreeningModal } from "@/components/Incidents/DecisionScreeningModal/DecisionScreeningModal";
import { IncidentPageHeader } from "@/components/Incidents/Details/Header";
import { HeaderExtra } from "@/components/Incidents/Details/HeaderExtra";
import { IncidentOverview, IPayload } from "@/components/Incidents/Overview";
import {
  IncidentDataObject,
  IncidentType,
  incidentTypeName,
} from "@/components/Incidents/types";
import { IncidentDetailLayout } from "@/layout/IncidentDetail";
import { faInfoCircle } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Trans } from "@lingui/react";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

const IncidentDetailOverviewPage = () => {
  const router = useRouter();
  const incidentId = router.query.id;
  const incidentTypeValue = router.query["incident-type"];

  const [item, setItem] = useState<IncidentDataObject>();
  const [decisionScreeningGuideShow, setDecisionScreeningGuideShow] = useState(
    incidentTypeValue === undefined
  );
  const [incidentType, setIncidentType] = useState(
    incidentTypeValue === undefined || incidentTypeValue === "0"
      ? IncidentType.WorrisomeBehavior
      : IncidentType.VTRA
  );
  const [hideModal, setHideModal] = useState(false);
  const setPayloadRef = useRef<Dispatch<SetStateAction<IPayload>>>();

  useEffect(() => {
    if (localStorage.getItem("hideDecisionModal")) {
      setHideModal(true);
    }
  }, []);

  useEffect(() => {
    const getIncidentDetails = async () => {
      try {
        const response = await fetch(`/api/mock/incidents/${incidentId}`);
        const { data } = await response.json();
        setItem(data);
      } catch (error) {
        setItem(undefined);
      }
    };

    if (incidentId) {
      getIncidentDetails();
    }
  }, [incidentId]);

  // handle decision screening modal close
  const handleGuideClose = (data: any) => {
    setDecisionScreeningGuideShow(false);
    let selection =
      data.selected === 0 ? IncidentType.WorrisomeBehavior : IncidentType.VTRA;
    setIncidentType(selection);
    if (setPayloadRef.current) {
      setPayloadRef.current((oldState) => ({
        ...oldState,
        incidentType: incidentTypeName[selection],
        categories: [],
      }));
    }
  };

  return (
    <div>
      <IncidentDetailLayout
        pageHeader={
          <IncidentPageHeader
            incidentName={item?.incident}
            incidentRisk={item?.risk}
          />
        }
        headerExtra={<HeaderExtra />}
      >
        {!hideModal ? (
          <DescisionScreeningModal
            defaultType={incidentType}
            show={decisionScreeningGuideShow}
            close={handleGuideClose}
          />
        ) : (
          <></>
        )}

        <div className="flex items-center justify-between pb-4 border-b-[1px] border-b-solid border-b-gray-300">
          <h1 className="mb-0 text-[28px] text-base-gray">
            <Trans id={"Incident Overview<"} />
            <Button variant={ButtonTypes.Link}>
              <FontAwesomeIcon icon={faInfoCircle} />
            </Button>
          </h1>
          <div>
            <Button variant={ButtonTypes.Outline} className="mr-2">
              <Trans id="save" />
            </Button>
            <Button variant={ButtonTypes.Primary}>
              <Trans id={"save and go to questionnaire"} />
            </Button>
          </div>
        </div>
        <IncidentOverview
          incidentType={incidentTypeName[incidentType]}
          setIncidentType={setIncidentType}
          setPayloadRef={setPayloadRef}
        />
      </IncidentDetailLayout>
    </div>
  );
};

export default IncidentDetailOverviewPage;
