import { useContext } from "react";
import { IssuesContext } from "../contexts/IssuesContext";

export const useIssueContext = () => useContext(IssuesContext)