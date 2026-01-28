import { ServicePageLayout } from "@/components/ServicePageLayout";
import backupRestoreImg from "@/assets/services/backup-restore-service.jpg";

const BackupRestore = () => {
  return (
    <ServicePageLayout
      title="Backup & Restore"
      subtitle="IT Infrastructure"
      description="Enterprise backup solutions and data recovery services for business protection."
      image={backupRestoreImg}
      features={[
        { title: "Backup Strategy", description: "Backup policy design and implementation." },
        { title: "Data Backup", description: "Automated data backup for applications and systems." },
        { title: "Cloud Backup", description: "Cloud-based backup and archiving solutions." },
        { title: "Restore Services", description: "Rapid data and system restoration." },
        { title: "Backup Monitoring", description: "Backup job monitoring and reporting." },
        { title: "Backup Testing", description: "Regular restore testing and validation." }
      ]}
      keyBenefits={["Data protection", "Recovery assurance", "Compliance", "Business continuity", "Peace of mind"]}
      relatedServices={[
        { title: "Disaster Recovery", slug: "disaster-recovery" },
        { title: "Storage", slug: "storage" },
        { title: "Data Protection", slug: "data-protection" }
      ]}
    />
  );
};

export default BackupRestore;
