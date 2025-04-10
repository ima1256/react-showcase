import "./ProfileSkills.scss";
import { LinearProgress, Stack } from "@mui/material";

const ProfileSkills = () => {
  const skills = {
    "CSS Preprocessors and Frameworks": { value: 40 },
    "APIs and Data Fetching": { value: 50 },
    "Design and UI/UX Skills": { value: 80 },
  };

  return (
    <Stack direction="column" spacing={2} className="profile-skills py-6">
      {Object.entries(skills).map(([name, data], index) => (
        <div className="skill" key={index}>
          <div className="text-[#cccccc] mb-2">{name}</div>
          <LinearProgress
            variant="determinate"
            value={data.value}
            sx={{ height: "12px", borderRadius: "10px" }}
          />
        </div>
      ))}
    </Stack>
  );
};

export default ProfileSkills;
