import * as React from "react";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

type LinearProgressWithLabelsProps = LinearProgressProps & {
  value: number;
  time: number;
};

const LinearProgressWithLabels = (props: LinearProgressWithLabelsProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "30px",
      }}
    >
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">
          {`${props.time} s`}
        </Typography>
      </Box>
      <Box sx={{ width: "70%", mr: 1, margin: "10px" }}>
        <LinearProgress
          variant="determinate"
          {...props}
          value={props.value * 10}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">
          {`✅ ${props.value}`}
        </Typography>
      </Box>
    </Box>
  );
};

export default LinearProgressWithLabels;
