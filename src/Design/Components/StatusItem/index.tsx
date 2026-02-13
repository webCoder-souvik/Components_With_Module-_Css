import styles from "./status.module.css";

interface StatusItemsProps {
  statusVariation: "success" | "faliure" | "progress" | "disable";
  label: string;
  ariaLabel: string;
}

const StatusItem = ({
  statusVariation,
  label,
  ariaLabel,
}: StatusItemsProps) => {
  return (
    <>
      <span
        // className={
        //   statusVariation === "success"
        //     ? "status-capsule capsule-green"
        //     : statusVariation === "faliure"
        //       ? "status-capsule capsule-red"
        //       : statusVariation === "progress"
        //         ? "status-capsule capsule-blue"
        //         : statusVariation === "disable"
        //           ? "status-capsule capsule-grey"
        //           : "status-capsule"
        // }

        className={`${styles.status_capsule} ${statusVariation ? styles[statusVariation] : ""}`}
        aria-label={ariaLabel}
      >
        {label}
      </span>
    </>
  );
};

export default StatusItem;
