import java.util.*;

public class Main {

    public static void main(String[] args) {
        List<String> strs = new ArrayList<>();
        strs.add("lints");
        strs.add("code");
        strs.add("love");
        strs.add("you");

        System.out.println(encode(strs));
        System.out.println(decode(encode(strs)));

        List<String> strs1 = new ArrayList<>();
        strs1.add("we");
        strs1.add("say");
        strs1.add(":");
        strs1.add("yes");
        System.out.println(encode(strs1));
        System.out.println(decode(encode(strs1)));

    }

    public static String encode(List<String> strs) {
        StringBuilder out = new StringBuilder();
        String delimiter = ":;";
        for (int i = 0; i < strs.size(); i++) {
            if(i == strs.size() - 1){
                out.append(strs.get(i));
                break;
            }
            out.append(strs.get(i)).append(delimiter);
        }
        return out.toString();
    }

    public static List<String> decode(String str) {
        String[] tempArr = str.split(":;");
        return new ArrayList<>(Arrays.asList(tempArr));
    }
}
